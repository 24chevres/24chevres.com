# Provider
provider "aws" {
  region = "eu-west-3"
}

# IAM role for github democrat lambda
resource "aws_iam_role" "iam_role_github_democrat" {
  name = "iam_role_github_democrat"

  assume_role_policy = <<EOF
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Action": "sts:AssumeRole",
      "Principal": {
        "Service": "lambda.amazonaws.com"
      },
      "Effect": "Allow",
      "Sid": ""
    }
  ]
}
EOF
}

# IAM policy attachment
resource "aws_iam_policy_attachment" "iam_policy_lambda_basic" {
  name       = "iam_policy_lambda_basic"
  roles      = ["${aws_iam_role.iam_role_github_democrat.name}"]
  policy_arn = "arn:aws:iam::aws:policy/service-role/AWSLambdaBasicExecutionRole"
}

# Lambda
resource "aws_lambda_function" "github_democrat" {
  filename         = "github-democrat-aws-lambda.zip"
  function_name    = "github_democrat_run"
  role             = "${aws_iam_role.iam_role_github_democrat.arn}"
  handler          = "index.handler"
  source_code_hash = "${base64sha256(file("github-democrat-aws-lambda.zip"))}"
  runtime          = "nodejs6.10"
  timeout          = "30"

  environment = {
    variables = {
      GITHUB_ORGANIZATION                                = "24chevres"
      GITHUB_REPOSITORY                                  = "24chevres.com"
      GITHUB_OAUTH_TOKEN                                 = "TODO"
      GITHUB_PULLREQUEST_DESCRIPTION_PREFIX_READYTOMERGE = "[RDY]"
    }
  }
}

# CloudWatch event
resource "aws_cloudwatch_event_rule" "every_hour" {
  name                = "every-hour"
  description         = "Fires every hour"
  schedule_expression = "rate(1 hour)"
}

# CloudWatch event target
resource "aws_cloudwatch_event_target" "github_democrat_every_hour" {
  rule      = "${aws_cloudwatch_event_rule.every_hour.name}"
  target_id = "github_democrat"
  arn       = "${aws_lambda_function.github_democrat.arn}"
}

# CloudWatch permissions
resource "aws_lambda_permission" "allow_cloudwatch_to_call_github_democrat" {
  statement_id  = "AllowExecutionFromCloudWatch"
  action        = "lambda:InvokeFunction"
  function_name = "${aws_lambda_function.github_democrat.function_name}"
  principal     = "events.amazonaws.com"
  source_arn    = "${aws_cloudwatch_event_rule.every_hour.arn}"
}

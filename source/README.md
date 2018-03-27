24chevres.com website
---------------------

## HTTP Live Server

In order to test your modification locally, we use `live-server`:

```sh
npm install
npm start
```

If you encounter the error *ENOSPC* try the following:

  - Debian:
```sh
echo fs.inotify.max_user_watches=582222 | sudo tee -a /etc/sysctl.conf && sudo sysctl -p
```

  - ArchLinux:
```sh
echo fs.inotify.max_user_watches=524288 | sudo tee /etc/sysctl.d/40-max-user-watches.conf && sudo sysctl --system
```

Listen uses inotify by default on Linux to monitor directories for changes. It's not uncommon to encounter a system limit on the number of files you can monitor. For example, Ubuntu Lucid's (64bit) inotify limit is set to 8192. [Source](https://github.com/guard/listen/wiki/Increasing-the-amount-of-inotify-watchers)

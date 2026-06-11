---
title: "How to Fix 'No Such File or Directory' in Linux"
excerpt: "Fix the Linux 'No Such File or Directory' error by checking file paths, filenames and directories. Learn the fastest troubleshooting steps with practical examples."
youtubeId: "88Ys_DpTnGw"
featured: false
publishedAt: "2026-06-10"
tags:
  - linux
  - troubleshooting
  - bash
  - terminal
  - linux-errors
author: "ZekByte Systems"
---

If you've ever run a Linux command and received:
```bash
No such file or directory
```

you're not alone.

This is one of the most common Linux errors and usually means Linux cannot find the file, directory or path you specified.

This is what the error typically looks like:

![Linux No Such File or Directory error in terminal](../../../assets/images/linux/linux-no-such-file-or-directory-error.webp)

The video below demonstrates the fix in under 30 seconds, but this article explains why the error occurs and how to troubleshoot it properly.
Whether you're using Ubuntu, Debian, CentOS, Rocky Linux, Fedora or another Linux distribution, the troubleshooting steps are essentially the same.
This error commonly appears when using commands such as cat, cp, mv, rm and shell scripts.

## What Causes "No Such File or Directory"?

The error typically occurs when:
- The file does not exist.
- The filename is misspelled.
- The path is incorrect.
- You are in the wrong directory.
- The file was moved or deleted.

## Check Your Current Directory
The best thing to do is to start by checking where you are using the following command:
```bash
pwd
```

The output may look similar to:
```text
/home/user/documents
```

That's how you find your current working directory.


## List Available Files
Next, verify the file exists:
```bash

ls -la
```

This command displays all files in the current directory.
If the file is not listed, it's usually because:

- you're in the wrong directory
- the filename is incorrect
- the file no longer exists

## Verify the File Path
If the file is stored elsewhere, specify the full path:
```bash

cat /home/user/documents/report.txt
```

Using absolute paths often eliminates confusion.

## Common Mistakes
### Typographical Errors
Linux filenames are case-sensitive.
These are different files:

```text
report.txt
Report.txt
REPORT.txt
```

### Wrong Directory
Check where you are:
```bash
pwd
```

Navigate if necessary:
```bash
cd /path/to/directory
```

### File Deleted
Search for the file:

```bash
find /home -name "report.txt" 2>/dev/null
```

## Example Fix
Before:
```bash
cat reports.txt
```

Result:
```text
cat: reports.txt: No such file or directory
```

After correcting the filename:
```bash
cat report.txt
```

The file opens successfully.

## Conclusion
The "No Such File or Directory" error almost always comes down to an incorrect path, filename or missing file.

Use the following commands to quickly identify the issue and verify that the file actually exists:
```bash
pwd
ls -la
find
```

Once you understand how Linux paths work, this becomes one of the easiest errors to fix.

## Related Linux Troubleshooting Guides

More troubleshooting articles will be added here as the Linux knowledge base grows.

- [Fix Temporary Failure in Name Resolution on Linux (DNS Not Working Fix)](/blog/linux/fix-temporary-failure-name-resolution-linux-dns/)
- How to Fix "Permission Denied" in Linux
- How to Fix "Command Not Found" in Linux
- How to Find Large Files in Linux
- How to Check CPU and Memory Usage in Linux
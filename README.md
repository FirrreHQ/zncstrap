zncstrap
========

A simple ZNC Web-Interface theme build with Twitter Bootstrap Framework.

###Installing zncstrap

Step 1 - Get a latest version of zncstrap. Install Git / Git Core on your Linux machine or alternativly, install and use wget or aget tool; or the good ole way via FTP/sFTP.

Step 2 - We strongly advice you to make backups of your current files/folders before you proceed to install zncstrap. Once you have your backups stored elsewhere, you can proceed to delete/remove the default theme(s). 

Step 3 - Navigate to ~/znc/share/znc/webskins and delete all those files as we will no longer be needing them.

Step 4 - Once it has completely removed, you can now go ahead and upload all files in the '~/zncstrap/webskins' folder.

> ~/zncstrap/webskins  <->  ~/znc/share/znc/webskins

Step 5 - Now, you will need to overwrite the modules

>  ~/zncstrap/modules  <->  ~/znc/share/znc/modules

Once completed, you're good to go! - Login to your web-interface http://ip:port or http://domain.ltd:port via any of your preferred web browsers.

### FAQ

**Q: Why can't zncstrap work alongside the default ZNC themes itself?**

A: Mainly because the different HTML tags and attributes used in zncstrap, as part of Twitter Bootstrap specifically in "~/znc/share/znc/modules/webadmin/tmpl" (e.g http://git.io/qj8MKg to http://git.io/SofsZg). If it had been left un-edited, it will not be visually pleasing and would be looking all off-margin. As the CSS bits are different and varies. Hence why the default ZNC themes should be removed as it will no longer serve any good when zncstrap is installed.


**Q: I installed zncstrap, but it is off-margin and un-styled!**

A: You should overwrite everything from '~/zncstrap/modules' to "~/znc/share/znc/modules" on your machine.

**Q: When will support for v1.5-git be rolling out?

A: We are working on it. It is in the May pipeline. 

### More information and screenshots
Website: https://firrre.com/zncstrap

zncstrap
========

A simple ZNC Web-Interface theme build with Twitter Bootstrap Framework.

###Versions

Note: If you have ZNC version 1.5 or later installed on your machine, kindly direct yourself to the 'dev' branch on this repository. Users who are utilizing ZNC version 1.4 (stable), can go ahead and use this 'master' branch instead. Both branches varies.

###Installing zncstrap

Step 1 - Get a latest version of zncstrap. The "master" branch is specifically for ZNC version v1.4, while the "dev" (Development) branch is for ZNC version 1.5 and later. As mentioned above, both branches varies.

Step 2 - We strongly advice you to make backups of your current ZNC setup (config files and folders, just to be on the safe-side) before you proceed to install zncstrap theme. Once you have your backups stored elsewhere (off-site), you can proceed to delete/remove the default theme(s). 

You can do so by pointing to /home/username/znc/share/znc. If you have installed ZNC through a software package manager such as: Advanced Packaging Tool (Apt) or Yellowdog Updater, Modified (yum). You will need to navigate to /usr/local/share/znc/ or /usr/share/znc as the webskins static files resides there (file directries may vary). If all else fails, try using the 'whereis' tool on Linux. You can do so by executing the following command in your terminal / console: whereis znc

Step 3 - Navigate to ~/share/znc/ and delete both files, being 'modules' & 'webskins', as we will no longer be needing them both.

Step 4 - Once it has completely removed, you can now go ahead and upload all zncstrap files in the '~/zncstrap/webskins' folder that you have downloaded from the GitHub repository.

> ~/zncstrap/webskins  <->  ~/znc/share/znc/webskins

>  ~/zncstrap/modules  <->  ~/znc/share/znc/modules

Once completed, you're good to go! - Login to your web-interface http://ip:port or http://domain.ltd:port via any of your preferred web browsers.

### FAQ

**Q: Why can't zncstrap work alongside the default ZNC themes itself?**

A: Mainly because the different HTML tags and attributes used in zncstrap, as part of Twitter Bootstrap specifically in "~/znc/share/znc/modules/webadmin/tmpl" (e.g http://git.io/qj8MKg to http://git.io/SofsZg). If it had been left un-edited, it will not be visually pleasing and would be looking all off-margin. As the CSS bits are different and varies. Hence why the default ZNC themes should be removed as it will no longer serve any good when zncstrap is installed.


**Q: I installed zncstrap, but it is off-margin and un-styled!**

A: You should overwrite everything from '~/zncstrap/modules' to "~/share/znc/modules" or "/usr/local/share/znc/modules" on your machine.


**Q: Which branch is being actively maintained?**

A: The 'dev' branch. As for the 'master' branch, it should work with the stable release, version 1.4 with no hiccups.


### Technologies & Scripts

- Twitter Bootstrap version 3
- jQuery
- Bootstrap JavaScript tools
- Bootswatch Themes
- Divshot Bootstrap Themes
- Google Charts (Dev Only)


### More information and screenshots
Website: https://firrre.com/zncstrap

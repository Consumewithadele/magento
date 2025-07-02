1.) Clone the repo 
2.)  create new database and install magento and ignore env file and i have not added gitignore file 
3.) I have created one child-theme  based on luma theme as parent theme   Names Perfect/luma-child
commands

php bin/magento setup:upgrade
php bin/magento setup:di:compile
php bin/magento setup:static-content:deploy

4.) Login to admin and navigate to content -> configuration and set Pereft/luma child  theme and save.
5.) Now create demo product in admin to check on frontend if button colour is yellow or not.

6.) I have also created custom layout so navigate to CMS-> Pages 
-> create new CMS page and select layout custom layout and same the page
-> Check on frontend this page will show form with three fields and on submit there will be confirmation model popup 

7.) complete test is performed as per your requirements like using seperate Js file and using x-magento-init” script to call a separate javascript file. 

8.)Please check all custom codes are inside app/design/frontend/Perfect/luma_child/




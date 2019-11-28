# JustEat
Test Automation Framwork


Steps to Run Test Suite :
Downlaod JustEat-Automation.zip file 
Extract Zip folder
 Download Visual studio (64 bit ) [depends on computer config. Please check which is required]
Install VS 
Open New Window >> open Folder >> Add folder (select the location where JustEat-Automation folder is placed)>> Select Folder 
Test Project should be opened in VS studio.
Now from VS click on Terminal option available at the top bar 
Terminal >> New Terminal ( Terminal Should open at the bottom ) 
Run command as 
Npm install
 
It will take couple of secs to install the required package 
Validate we have Node module folder created after this.








 

Now run command
>>>> cd node_modules\.bin
 to change folder 
run command 
>>>>npm i protractor
Once installed 
Again, run command
>>>webdriver-manager update


Npw once its done change the folder to JustEat-Automation>
Using command 
>> cd..
>>cd..
Make sure controller is on required folder as shown in image 



Now all required set up has been completed 
Finally execute  command to run the test suite 
>>npm run test 

Test suite will start executing 
 Once execution is completed go to 
Reports folder on the left panel 
Report > Select any numbered folder > Right click on it and select reveal in folder option 
 


Go to Folder and open protractorTestReport.html
 
It will open the report which has all test execution details 


 









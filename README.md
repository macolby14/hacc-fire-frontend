This is a submission for the Hawaii Annual Code Challenge (HACC 2020).

The challenge done was: Hawaii State Archives – Gamification of Crowdsource Indexing

See: https://hacc.hawaii.gov/challenges/ for more info on the challenge.

Frontend Technologies: React, NextJS

Backend Technologies: NodeJS, Postgresql

Other Technologies: OAuth2 for Google Login

Current features:
-Allow users to login with Google OAuth2 to keep track of their contributions
-Show leaderboard with score of each user
-Display pdf served from an Amazon S3 bucket (can be migrated to SharePoint or other storage solution)
-Read a schema file from S3 bucket and dynamically create DB columns 
-Server tasks when the file name is specificed before hand (working on dynamically reading all tasks from file)

Upcoming features:
- Point to a storage folder to create a schema based on an xml file and create tasks automatically
- Allow csv file download of the postgres data of compelted tasks 
- Allow form validation of tasks before user submits
- Allow tracking of tasks so that each task is served to two individuals
- Allow users to skip a task and go onto next ask
# HW1-DevOps

#### Name: Arshdeep Singh Syal
#### Unity Id: asyal
#### Link to screencast video: https://drive.google.com/file/d/1-tR4tSWg1y467JpKJ8sEtP2TRXDTU_Gn/view?usp=sharing

I have automated the process of creating a virtual machine on a cloud service.
I have used 2 cloud services to demonstrate the same.<br/>
1) Digital Ocean
2) Google Cloud Platform

I have also set up ssh based authentication for both the virtual machines.

## 1) Digital Ocean

1. We start by creating an account an on the digital ocean platform.

<img width="1440" alt="screenshot 2019-01-25 at 8 43 00 pm" src="https://media.github.ncsu.edu/user/12952/files/d2ed2c80-20e1-11e9-8f82-5184f48afa64">

2. Then we clone the following the provisioning workshop files by using the following command:

```git clone https://github.com/CSC-DevOps/Provision```

3. Then from the terminal, we run the following command:

```
cd Provision
npm install
```

These commands install the dependencies for provisioning a new virtual machine, from inside of the Provision Folder.

4. We then set the DOTOKEN to the token asigned to us from when we created the digital ocean account.

```export DOTOKEN="xxx"```

5. Now, we set up ssh based authentication to remotely sign into the virtual machine. We run the following commands for that:

```ssh-keygen```

This creates a ssh key which is added to the digital ocean account, hence making ssh based suthentication possible from this local machine to all virtual machines created by my digital occean account.

<img width="1440" alt="screenshot 2019-01-25 at 11 20 51 pm" src="https://media.github.ncsu.edu/user/12952/files/de4b5280-20f7-11e9-8ff2-ce645fbd812c">

6. We now run the program using the following command:

```node main.js```

We then comment the createdroplet function dfrom the code and copy the printed droplet id  from the terminal mand paste it in the code, assigning it o the variable id. Then we uncomment the dropletindo function and run the same command - ```node main.js``` to see that this time an ip address is printed on the terminal.  

<img width="1440" alt="screenshot 2019-01-25 at 5 51 48 pm" src="https://media.github.ncsu.edu/user/12952/files/843f9280-20e1-11e9-9ce9-be8a15ec1a1d">

7. We copy the ip address from the terminal use ssh based authentication to log into the virtual machine that has been created. 

```ssh root@[IP ADDRESS]```

This allows us to log in to the virtual machine without using the temporary password that digital ocean emails to its users.


## 2) Google Cloud Platform
 
 1. We start by creating an account on the google cloud platform.

 ```gcloud init```
 
 ```export GOOGLE_APPLICATION_CREDENTIALS="/Users/arsh/Desktop/GoogleCloudPlatform/hw1-devops-645fc61ba81b.json"```

<img width="1440" alt="screenshot 2019-01-25 at 6 05 38 pm" src="https://media.github.ncsu.edu/user/12952/files/9e797080-20e1-11e9-821f-1dda094159b6">

```node createVM.js```

<img width="1435" alt="screenshot 2019-01-25 at 8 48 51 pm" src="https://media.github.ncsu.edu/user/12952/files/a4238600-20e2-11e9-8f89-474bd2824b60">

<img width="1440" alt="screenshot 2019-01-25 at 8 41 25 pm" src="https://media.github.ncsu.edu/user/12952/files/991c2600-20e1-11e9-9e77-454b87104c25">

<img width="1440" alt="screenshot 2019-01-25 at 8 51 51 pm" src="https://media.github.ncsu.edu/user/12952/files/b05c1300-20e3-11e9-8242-2ac5033e979f">

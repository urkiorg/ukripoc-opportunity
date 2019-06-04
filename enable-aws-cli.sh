#!/bin/sh
 
set -e
 
read -p "Enter your 2FA code for UKRI [ENTER]:" code
 
aws_username=matt.kane@aerian.com
echo "Generating credentials for for $aws_username"

 
mfaArn="arn:aws:iam::475991803334:mfa/$aws_username"
      
response=`aws sts get-session-token --profile=ukristaging-auth --serial-number $mfaArn --token-code $code`
 
AccessKeyId=`echo $response | jq ".Credentials.AccessKeyId" -r`
SecretAccessKey=`echo $response | jq ".Credentials.SecretAccessKey" -r`
SessionToken=`echo $response | jq ".Credentials.SessionToken" -r`
 
# remove '' for linux
sed -i '' "s@aws_access_key_id=%UKRIAccessKeyId%@aws_access_key_id=$AccessKeyId@" ~/.aws/credentials
sed -i '' "s@aws_secret_access_key=%UKRISecretAccessKey%@aws_secret_access_key=$SecretAccessKey@" ~/.aws/credentials
sed -i '' "s@aws_session_token=%UKRISessionToken%@aws_session_token=$SessionToken@" ~/.aws/credentials
  
echo "Credentials with a 12 hour validity for $aws_username generated and written into ~/.aws/credentials"

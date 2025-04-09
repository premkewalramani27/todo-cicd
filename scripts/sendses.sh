#!/bin/bash

# Get the deployment group name from CodeDeploy
DEPLOYMENT_GROUP_NAME=$(aws deploy get-deployment-group --application-name myapp --deployment-group-name test --query "deploymentGroupInfo.deploymentGroupName" --output text)

# Only send email if this is the test environment
if [[ "$DEPLOYMENT_GROUP_NAME" == "test" ]]; then
    aws ses send-email \
      --from "premkewalramani0927@gmail.com" \
      --destination "premkewalramani0927@gmail.com" \
      --message "Subject={Data='Deployment Completed'},Body={Text={Data='Your application has been successfully deployed.'}}"
fi

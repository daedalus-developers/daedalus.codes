# Development

### Install dependencies

1. Download [pocketbase](https://pocketbase.io/docs/) runtime depending on your OS.
   paste it on the `pb` directory;

2. You don't need to touch that directory.

3. After downloading try running `pnpm run dev:api`

4. If successful initialize your instance by going at `http://localhost:8090/_/`

   1. Copy the `.env.example` to `.env.development`

      ```sh
      cp .env.example .env.development
      ```

   2. Whatever you put in the installer setup should also be in your
      `.env.development` credentials

5. Use the sample data just upload the `sampledata.zip` located at
   `pb` directory to your local pb instance at [Backups](http://127.0.0.1:8090/_/#/settings/backups)

6. You local data that you have will stay with you as `pb/pb_data` is `gitignored`
   This will keep our production data pristine

7. You can now install node dependencies using `pnpm install`

8. On a seperate terminal run the ff commands on each one
   `pnpm dev:api` and `pnpm dev:web`

9. In case you are lazy run both using `pnpm dev` but some systems
   might not support closing each child process.

10. Contribute and make a PR.

For further questions reachout with the team

## Deployment

The following project will only be deployable using `adapter-node`  
and all other `env` setup is there.

If you want to deploy a similar stack on your own you need to host your own pb instance.

## How to Enable OAuth2 and add provider credentials in PocketBase
1. Go to your PocketBase http://localhost:8090

2. At the left side Select Collection > "users" collection

3. Click Gear Icon "edit collection"

4. Select "Options" and click drop down "OAuth2"

5. Click "Enable" then click "Manage OAuth2 providers"

6. A new tab will open showing all available OAuth2 providers in pocketbase. 

7. Select the provider you need.

8. Enable it then add credentials needed. Google, Discord and GitHub providers require Client ID and Client Secret.

## Creating an OAuth2 App
Here are some guides in creating an OAuth app per provider.
- [GitHub](#github)
- [Discord](#discord)
- [Google](#google)

### GitHub
Please follow the link for instructions and guidelines on how to create an app on GitHub
https://docs.github.com/en/apps/oauth-apps/building-oauth-apps/creating-an-oauth-app

### Google
Please follow the link for instructions and guidelines on how to create an app on Google.
https://support.google.com/cloud/answer/6158849?hl=en

### Discord
1. Go to Discord developer portal: https://discord.com/developers/applications
2. In the left-side corner, select Applications

![image](https://github.com/devpapi0891/daedalus.codes/assets/97945953/19042bef-3969-493d-aa1d-84ea1efa2d71)

3. At the top right corner. Click the "New Application button".

![image](https://github.com/devpapi0891/daedalus.codes/assets/97945953/0b2b8564-f064-4f44-b720-3186b7eabf05)

4. A modal will pop up. Enter an Application name.

![image](https://github.com/devpapi0891/daedalus.codes/assets/97945953/7175c581-bb23-4621-bd52-dbdeb5715e52)

5. Copy the "APPLICATION ID" and "PUBLIC KEY" and save it somewhere safe.
6. At the left-side corner of the page. SELECT "OAuth2".
7. Add a redirect URL. See the image below

![image](https://github.com/devpapi0891/daedalus.codes/assets/97945953/3bef0d25-6a81-4585-a0a0-c54452267eda)
![image](https://github.com/devpapi0891/daedalus.codes/assets/97945953/0e96fd9d-f2f9-4f06-a1bd-e4da0536c1ac)

8. Click "Save Changes" and you're done!



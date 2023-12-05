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

   3. Pocketbase will auto migrate your database which is autosynced by pb
      through the `/pb/pb_migrations`.

5. You local data that you have will stay with you as `pb/pb_data` is `gitignored`
   This will keep our production data pristine

- Option to use the sample data just upload the `sampledata.zip` located at
  `pb` directory to your local pb instance at [Backups](http://127.0.0.1:8090/_/#/settings/backups)

6. You can now install node dependencies using `pnpm install`

7. On a seperate terminal run the ff commands on each one
   `pnpm dev:api` and `pnpm dev:web`

8. In case you are lazy run both using `pnpm dev` but some systems
   might not support closing each child process.

9. Contribute and make a PR.

For further questions reachout with the team

## Deployment

The following project will only be deployable using `adapter-cloudflare`  
and all other `env` setup is there.

If you want to deploy a similar stack on your own you need to host your own pb instance.

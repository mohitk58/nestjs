/**
 * @typedef {import('typeorm').MigrationInterface} MigrationInterface
 */

/**
 * @class
 * @implements {MigrationInterface}
 */
module.exports = class InitialMigration1754491699967 {
  async up(queryRunner) {
    // Create user table
    await queryRunner.query(`
            CREATE TABLE "user" (
                "id" integer PRIMARY KEY AUTOINCREMENT NOT NULL,
                "email" varchar NOT NULL,
                "password" varchar NOT NULL,
                "admin" boolean NOT NULL DEFAULT (1)
            )
        `);

    // Create report table
    await queryRunner.query(`
            CREATE TABLE "report" (
                "id" integer PRIMARY KEY AUTOINCREMENT NOT NULL,
                "price" integer NOT NULL,
                "approved" boolean NOT NULL,
                "make" varchar NOT NULL,
                "model" varchar NOT NULL,
                "year" integer NOT NULL,
                "mileage" integer NOT NULL,
                "lng" integer NOT NULL,
                "lat" integer NOT NULL,
                "userId" integer,
                CONSTRAINT "FK_96cc6b9b9e65925cce55947fc33" FOREIGN KEY ("userId") REFERENCES "user" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION
            )
        `);
  }

  async down(queryRunner) {
    // Drop report table first (due to foreign key)
    await queryRunner.query(`DROP TABLE "report"`);

    // Drop user table
    await queryRunner.query(`DROP TABLE "user"`);
  }
};

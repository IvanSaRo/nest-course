import { MigrationInterface, QueryRunner } from 'typeorm';

export class second1629477607964 implements MigrationInterface {
  name = 'second1629477607964';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "public"."users" ADD "lastname" character varying`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "public"."users" DROP COLUMN "lastname"`,
    );
  }
}

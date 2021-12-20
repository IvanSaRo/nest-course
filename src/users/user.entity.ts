import * as bcrypt from 'bcrypt';
import { BeforeInsert, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('users')
export class UserEntity {
  @PrimaryGeneratedColumn('uuid')
  readonly userId: string;

  @Column({
    unique: true,
  })
  readonly name: string;

  @Column({
    nullable: true,
  })
  readonly lastname: string;

  @Column({ type: 'varchar', length: 70, nullable: true })
  password: string;

  @BeforeInsert()
  async hashPassword() {
    const salt = await bcrypt.genSalt();
    this.password = await bcrypt.hash(this.password, salt);
  }

  async validatePassword(password: string): Promise<boolean> {
    return bcrypt.compareSync(password, this.password);
  }

  constructor(userId: string, name: string, lastname: string) {
    this.userId = userId;
    this.name = name;
    this.lastname = lastname;
    //this.password = password;
    console.log('Creo User Entity para ' + this.name);
  }
}

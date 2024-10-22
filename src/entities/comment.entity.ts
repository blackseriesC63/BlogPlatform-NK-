// import {
//     Entity,
//     PrimaryGeneratedColumn,
//     Column,
//     ManyToOne,
//     JoinColumn,
//   } from "typeorm";
//   import { User } from "./user.entity";
//   import { Blog } from "./blog.entity";

//   @Entity()
//   export class Comment {
//     @PrimaryGeneratedColumn()
//     id: number;

//     @Column("text")
//     content: string;

//     @ManyToOne(() => User)
//     @JoinColumn({ name: "userId" })
//     user: User;

//     @Column()
//     userId: number;

//     @ManyToOne(() => Blog)
//     @JoinColumn({ name: "blogId" })
//     blog: Blog;

//     @Column()
//     blogId: number;

//     @Column({ type: "timestamp", default: () => "CURRENT_TIMESTAMP" })
//     createdAt: Date;

//     @Column({ type: "timestamp", nullable: true })
//     updatedAt: Date;
//   }

import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
} from "typeorm";
import { Blog } from "./blog.entity";
import { User } from "./user.entity";

@Entity()
export class Comment {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  content: string;

  @ManyToOne(() => Blog, (blog) => blog.comments)
  @JoinColumn({ name: "blogId" })
  blog: Blog;

  @Column()
  blogId: number;

  @ManyToOne(() => User, (user) => user.comments)
  @JoinColumn({ name: "userId" })
  user: User;

  @Column()
  userId: number;
}

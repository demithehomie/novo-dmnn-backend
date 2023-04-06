import { Module } from "@nestjs/common";
import { PrismaService } from "./prisma.service";
import { UsersModule } from "src/users/users.module";

@Module({
//   imports: [UsersModule],
    providers: [PrismaService],
    exports: [PrismaService]
})
export class PrismaModule {}
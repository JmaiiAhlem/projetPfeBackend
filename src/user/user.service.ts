

import { ConflictException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';

import { Model } from "mongoose";
import { UpdateUserDto } from 'src/dto/update-user.dto';
import { CreateUserDto } from 'src/dto/user-create.dto';
import { IUser } from 'src/interface/user.interface';
@Injectable()
export class UserService {
constructor(@InjectModel('User') private UserModel:Model<IUser>) { }

async createUser(createUserDto: CreateUserDto): Promise<IUser> {
    const { email } = createUserDto;
    const existingUser = await this.UserModel.findOne({ email }).exec();
    
    if (existingUser) {
      throw new ConflictException('Email already exists');
    }
   const newUser = await new this.UserModel(createUserDto);
   return newUser.save();
}

async updateUser(UserId: string, updateUserDto: UpdateUserDto): Promise<IUser> {
    const existingUser = await this.UserModel.findByIdAndUpdate(UserId, updateUserDto, { new: true });
   if (!existingUser) {
     throw new NotFoundException(`User #${UserId} not found`);
   }
   return existingUser;
}
async getAllUsers(): Promise<IUser[]> {
    const UserData = await this.UserModel.find();
    if (!UserData || UserData.length == 0) {
        throw new NotFoundException('Users data not found!');
    }
    return UserData;
}
async getUser(UserId: string): Promise<IUser> {
   const existingUser = await this.UserModel.findById(UserId).exec();
   if (!existingUser) {
    throw new NotFoundException(`User #${UserId} not found`);
   }
   return existingUser;
}
async deleteUser(UserId: string): Promise<IUser> {
    const deletedUser = await this.UserModel.findByIdAndDelete(UserId);
   if (!deletedUser) {
     throw new NotFoundException(`User #${UserId} not found`);
   }
   return deletedUser;
}

async connecteUser(password: string, email: string): Promise<IUser | null> {
    const existingUsers = await this.getAllUsers();
    console.log("password",password);
    console.log("email",email);
    let userFound = false;

    
    for (const user of existingUsers) {
      console.log(password);
      console.log("tttttt", user.email === email);
  
      if (user.email === email) {
        if (!user.verif) {
          console.log("eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee");
          throw new ConflictException('User is not confirmed');
        } else if (user.password === password) {
          console.log("wwwwwww", user.email === email && user.password === password);
          userFound = true;
          return user; // Utilisateur trouvé, retourne immédiatement
        }
      }
    }
  
    if (!userFound) {
      throw new NotFoundException('Invalid email or password');
    }
  
    return userFound; // Cela pourrait ne pas être nécessaire selon le contexte d'utilisation
  };

  async findOneByEmail(email: string): Promise<IUser> {
    const existingUser = await this.UserModel.findOne({email}).exec();
    if (!existingUser) {
     throw new NotFoundException(`User #${email} not found`);
    }
    return existingUser;
}
}

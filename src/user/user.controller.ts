
import { Body, ConflictException, Controller, Delete, Get, HttpStatus, Param, Post, Put, Query, Res } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from 'src/dto/user-create.dto';
import { ConnectedUser } from 'src/dto/connectedUser';
import { verify } from 'crypto';
import { ApiBody, ApiTags } from '@nestjs/swagger';
import { UpdateUserDto } from 'src/dto/update-user.dto';
import { IUser } from 'src/interface/user.interface';
@ApiTags('user')
@Controller('user')
export class UserController {
   constructor(private readonly userService: UserService) { }

@Post("createUser")
@ApiBody({ type: CreateUserDto })
   async createUser(@Res() response, @Body() createUserDto: CreateUserDto) {
    try {
      const newUser = await this.userService.createUser(createUserDto);
      return response.status(HttpStatus.CREATED).json({
        message: 'User has been created successfully',
        newUser,
      });
    } catch (err) {
      console.log('Caught error:', err);  // Ajoutez ce log pour vérifier l'exception
      if (err instanceof ConflictException) {
        return response.status(HttpStatus.CONFLICT).json({
          statusCode: HttpStatus.CONFLICT,
          message: 'Error: Email already exists!',
          error: 'Conflict',
        });
      }
      else {
      return response.status(HttpStatus.BAD_REQUEST).json({
        statusCode: HttpStatus.BAD_REQUEST,
        message: 'Error: User not created!',
        error: 'Bad Request',
      });
    }
    }

}


@Post('connected')
@ApiBody({ type: ConnectedUser })
   async connectedUser(@Res() response, @Body() connect:ConnectedUser) {
  try {


    console.log("password",connect.password);
    console.log("email",connect.email);
    
    const veruf = await this.userService.connecteUser(connect.password,connect.email);
    console.log("email",veruf);

    return response.status(HttpStatus.OK).json({
      message: 'User has been veriified successfully',
      veruf,});
   
    
 } catch (err) {
  console.log(err.status);
  
  return response.status(err.status).json(err.response);

 }
}
@Put('/:id')
@ApiBody({ type: UpdateUserDto })
async updateUser(@Res() response,@Param('id') UserId: string,
@Body() updateUserDto: UpdateUserDto) {
  try {
   const existingUser = await this.userService.updateUser(UserId, updateUserDto);
  return response.status(HttpStatus.OK).json({
  message: 'User has been successfully updated',
  existingUser,});
 } catch (err) {
   return response.status(err.status).json(err.response);
 }
}
@Get()
async getUsers(@Res() response) {
try {
  const userData = await this.userService.getAllUsers();
  return response.status(HttpStatus.OK).json({
  message: 'All users data found successfully',userData,});
 } catch (err) {
  return response.status(err.status).json(err.response);
 }
}
// @Get('/:id')
// async getUser(@Res() response, @Param('id') userId: string) {
//  try {
//     const existingUserr = await
// this.userService.getUser(userId);
//     return response.status(HttpStatus.OK).json({
//     message: 'User found successfully',existingUserr,});
//  } catch (err) {
//    return response.status(err.status).json(err.response);
//  }
// }

@Get('email')
async findOneByEmail(@Res() response, @Query('email') email: string) {
    try {
        const existingUser = await this.userService.findOneByEmail(email);
       
        return response.status(HttpStatus.OK).json({
            message: 'User found successfully',
            existingUser,
        });
    } catch (err) {
      return response.status(err.status).json(err.response);

    }
}
@Delete('/:id')
async deleteUser(@Res() response, @Param('id') UserId: string)
{
  try {
    const deletedUser = await this.userService.deleteUser(UserId);
    return response.status(HttpStatus.OK).json({
    message: 'User deleted successfully',
    deletedUser,});
  }catch (err) {
    return response.status(err.status).json(err.response);
  }
 }
}

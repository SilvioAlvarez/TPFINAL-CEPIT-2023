import { Module } from '@nestjs/common';
import { UsuarioService } from './usuario.service';
import { UsuarioController } from './usuario.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Usuario } from './entities/usuario.entity';
import { Alumno } from 'src/alumno/entities/alumno.entity';
import { Profesor } from 'src/profesor/entities/profesor.entity';
import { ProfesorService } from 'src/profesor/profesor.service';
import { AlumnoService } from 'src/alumno/alumno.service';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [
    TypeOrmModule.forFeature([Usuario, Profesor, Alumno]),
    JwtModule.register({
      secret: 'ProgramadorFullStack2023', // Tu clave secreta aquí
      signOptions: { expiresIn: '5s' },
    }),
  ],
  controllers: [UsuarioController],
  providers: [UsuarioService, ProfesorService, AlumnoService],
})
export class UsuarioModule {}
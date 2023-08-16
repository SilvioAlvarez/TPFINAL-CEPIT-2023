import { PartialType } from '@nestjs/mapped-types';
import { CreateEscuelaDto } from './create-escuela.dto';

export class UpdateEscuelaDto extends PartialType(CreateEscuelaDto) {

    public idEscuela?: number;
    public nombreEscuela?: string;
    public cue?: number;
}

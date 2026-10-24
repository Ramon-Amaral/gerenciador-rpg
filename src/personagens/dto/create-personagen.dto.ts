import { IsString, IsOptional, IsNotEmpty, IsInt, Min} from 'class-validator';


export class CreatePersonagenDto {
@IsString()
@IsNotEmpty()
nome_personagem: string;

@IsString()
@IsNotEmpty()
nome_jogador: string;

@IsString()
@IsOptional()
classe?: string;

@IsInt()
@Min(6)
idade: number;

@IsInt()
@Min(0)
level: number;

@IsInt()
@Min(1)
vida: number;

@IsInt()
@Min(1)
sanidade: number;

}




  
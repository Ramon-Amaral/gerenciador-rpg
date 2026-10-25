import {
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { CreatePersonagenDto } from './dto/create-personagen.dto';
import { UpdatePersonagenDto } from './dto/update-personagen.dto';

@Injectable()
export class PersonagensService {
  constructor(private prisma: PrismaService) {}

  async create(createPersonagenDto: CreatePersonagenDto) {
    const personagemExiste = await this.prisma.personagens.findFirst({
      where: {
        nome_personagem: createPersonagenDto.nome_personagem,
      },
    });

    if (personagemExiste) {
      throw new ConflictException('Já existe um personagem com o mesmo nome');
    }

    return await this.prisma.personagens.create({
      data: createPersonagenDto,
    });
  }

  async findAll() {
    return await this.prisma.personagens.findMany();
  }

  async findOne(id: number) {
    const encontrar = await this.prisma.personagens.findUnique({
      where: {
        id: id,
      },
    });

    if (!encontrar) {
      throw new NotFoundException('Personagem não encontrado');
    }
    return encontrar;
  }

  async update(id: number, updatePersonagenDto: UpdatePersonagenDto) {
    await this.findOne(id);

    return await this.prisma.personagens.update({
      where: { id },
      data: updatePersonagenDto,
    });
  }

  async remove(id: number) {
    await this.findOne(id);

    return await this.prisma.personagens.delete({
      where: { id },
    });
  }
}
import { ArgsType, Field, Int } from '@nestjs/graphql';
import { Max, Min } from 'class-validator';

@ArgsType()
export class RecipesArgs {
    @Field(type => String)
    id: string;

  @Field(type => Int)
  @Min(0)
  skip = 0;

  @Field(type => Int)
  @Min(1)
  @Max(50)
  recipe = 25;
}
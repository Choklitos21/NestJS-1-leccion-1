import { Test, TestingModule } from '@nestjs/testing';
import { BlackCatsController } from './black-cats.controller';

describe('BlackCatsController', () => {
  let controller: BlackCatsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BlackCatsController],
    }).compile();

    controller = module.get<BlackCatsController>(BlackCatsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

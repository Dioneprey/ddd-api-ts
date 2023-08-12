import { AnswersRepository } from '../repositories/answers-repository'

interface DeleteAnswersUseCaseRequest {
  authorId: string
  answerId: string
}

interface DeleteAnswersUseCaseResponse {
  void: void
}

export class DeleteAnswersUseCase {
  constructor(private answersRepository: AnswersRepository) {}

  async execute({ authorId, answerId }: DeleteAnswersUseCaseRequest) {
    const answers = await this.answersRepository.findById(answerId)

    if (!answers) {
      throw new Error('Answers not found')
    }

    if (authorId !== answers.authorId.toString()) {
      throw new Error('Not allowed.')
    }

    this.answersRepository.delete(answers)

    return {}
  }
}

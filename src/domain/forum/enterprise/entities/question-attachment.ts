import { Entity } from 'src/core/entities/entity'
import { UniqueEntityID } from 'src/core/entities/unique-entity-id'

interface QuestionAttachmentsProps {
  attachmentId: UniqueEntityID
  questionId: UniqueEntityID
}

export class QuestionAttachments extends Entity<QuestionAttachmentsProps> {
  get questionId() {
    return this.props.questionId
  }

  get attachmentId() {
    return this.props.attachmentId
  }

  static create(props: QuestionAttachmentsProps, id?: UniqueEntityID) {
    const questionAttachment = new QuestionAttachments(props, id)

    return questionAttachment
  }
}

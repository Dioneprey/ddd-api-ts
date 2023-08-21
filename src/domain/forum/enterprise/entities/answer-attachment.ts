import { Entity } from 'src/core/entities/entity'
import { UniqueEntityID } from 'src/core/entities/unique-entity-id'

interface AnswerAttachmentsProps {
  answerId: string
  attachmentId: string
}

export class AnswerAttachments extends Entity<AnswerAttachmentsProps> {
  get answerId() {
    return this.props.answerId
  }

  get attachmentId() {
    return this.props.attachmentId
  }

  static create(props: AnswerAttachmentsProps, id?: UniqueEntityID) {
    const answerAttachment = new AnswerAttachments(props, id)

    return answerAttachment
  }
}

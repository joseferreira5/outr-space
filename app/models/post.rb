# frozen_string_literal: true

class Post < ApplicationRecord
  belongs_to :user
  has_many :comments, dependent: :destroy

  def return_data
    {
      id: id,
      title: title,
      content: content,
      user_id: user_id,
      username: user.username,
      created_at: created_at,
      updated_at: updated_at,
      comments: comments
    }
  end
end

# frozen_string_literal: true

class Comment < ApplicationRecord
  belongs_to :user
  belongs_to :post

  def return_data
    {
      id: id,
      content: body,
      user_id: user_id,
      post_id: post_id,
      username: user.username,
      created_at: created_at,
      updated_at: updated_at
    }
  end
end

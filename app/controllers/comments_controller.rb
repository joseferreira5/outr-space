# frozen_string_literal: true

class CommentsController < ApplicationController
  before_action :set_comment, only: %i[show update destroy]
  before_action :set_post, only: :index
  before_action :authorize_request, only: %i[create update destroy]

  def index
    @comments = @post.comments
    render json: @comments, status: :ok
  end

  def show
    render json: @comment, status: :ok
  end

  def create
    @post = Post.find(params[:post_id])
    @comment = @post.comments.create(comment_params)

    if @comment
      render json: @comment, status: :created
    else
      render json: @comment.errors, status: :unprocessable_entity
    end
  end

  def update
    if @comment.update(comment_params)
      render json: @comment
    else
      render json: @comment.errors, status: :unprocessable_entity
    end
  end

  def destroy
    @comment.destroy
  end

  private

  # Use callbacks to share common setup or constraints between actions.
  def set_post
    @post = Post.find(params[:post_id])
  end

  def set_comment
    @comment = Comment.find(params[:id])
  end

  # Only allow a trusted parameter "white list" through.
  def comment_params
    params.require(:comment).permit(:body).merge(user_id: @current_user.id)
  end
end

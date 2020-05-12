# frozen_string_literal: true

class CommentsController < ApplicationController
  before_action :set_comment, only: %i[show update destroy]
  before_action :authorize_request, only: %i[create update destroy]

  def index
    @comments = Comment.all
    render json: @comments, status: :ok
  end

  def show
    render json: @comment, status: :ok
  end

  def create
    @comment = Comment.new(comment_params, user_id: @current_user.id)

    if @comment.save
      render json: @comment, status: :created, location: @comment
    else
      render json: @post.errors, status: :unprocessable_entity
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
  def set_comment
    @comment = Comment.find(params[:id])
  end

  # Only allow a trusted parameter "white list" through.
  def post_params
    params.require(:comment).permit(:title, :body, :post_id)
  end
end

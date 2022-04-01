class Api::NotesController < ApplicationController
  before_action :set_cat
  before_action :set_note, only: [:update, :show, :destroy]
  
  def index
    render json: @cat.notes
  end

  def show
    render json: @note
  end

  def create
    @note = @cat.notes.new(note_params)
    if @note.save
      render json: @note
    else
      render json: { errors: @note.errors }, status: :unprocessable_entity
    end
  end

  def update
    if @note.update(note_params)
      render json: @note
    else
      render json: { errors: @note.errors }, status: :unprocessable_entity
    end
  end

  def destroy
    @note.destroy
    render json: { message: 'Note deleted'}
  end

  private 
    def set_cat
      @cat = Cat.find(params[:cat_id])
    end

    def set_note
      @note = @cat.notes.find(params[:id])
    end

    def note_params
      params.require(:note).permit(:subject, :body, :note_date, :note_time)
    end
end
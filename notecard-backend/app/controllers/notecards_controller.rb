class NotecardsController < ApplicationController
    def index
        notecards = Notecard.all 
        render json: notecards, only: [:id, :term, :definition, :subject_id]
    end

    def create
        notecard = Notecard.create(term: params[:term], definition: params[:definition], subject_id: params[:subject_id])
        render json: notecard, only: [:id, :term, :definition, :subject_id]
    end

    def update
        notecard = Notecard.find(params[:id])
        notecard.update(term: params[:term], definition: params[:definition])
        render json: notecard, only: [:id, :term, :definition, :subject_id]
    end

    def destroy
        notecard = Notecard.find(params[:id])
        notecard.destroy
    end

end

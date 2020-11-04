class SubjectsController < ApplicationController
    def index
        subjects = Subject.all 
        render json: subjects, only: [:id, :name]
    end

    def create
        subject = Subject.create(name: params[:name])
        render json: subject, only: [:id, :name]
    end

    def update
        subject = Subject.find(params[:id])
        subject.update(name: params[:name])
        render json: subject, only: [:id, :name]
    end

    def destroy
        subject = Subject.find(params[:id])
        subject.destroy
    end

end

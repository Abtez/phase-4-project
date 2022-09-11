class ReviewsController < ApplicationController
rescue_from ActiveRecord::RecordInvalid, with: :handle_blank_field

    def index
        render json: Review.all, status: :ok
    end

    def show
        review = Review.find_by(id: params[:id])

        if review
            render json: review, status: :found
        else
            render json: { error: "Review does not exist" }, status: :unprocessable_entity
        end
    end

    def create
        review = Review.create!(review_params)
        if review.valid?
            render json: review, status: :created
        else
            render json: { errors: review.errors.full_messages }, status: :unprocessable_entity
        end
    end

    def destroy
        review = Review.find_by(id: params[:id])
        if review
            review.destroy
            head :no_content
            # render json: {error: "production not found"}
        else
            render json: {error: "Review not found"}
        end
    end
    

    private

    def review_params
        params.permit(:title, :description, :rating, :user_id, :product_id)
    end

    def handle_blank_field(invalid)
        render json: {error: invalid.record.errors}, status: :unprocessable_entity
    end
end

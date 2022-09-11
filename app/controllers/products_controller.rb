class ProductsController < ApplicationController
rescue_from ActiveRecord::RecordInvalid, with: :handle_blank_field

    def index
        render json: Product.all, status: :ok
    end

    def show
        product = Product.find_by(id: params[:id])

        if product
            render json: product, status: :found
        else
            render json: { error: "Product does not exist" }, status: :unprocessable_entity
        end
    end

    def create
        product = Product.create!(product_params)
        if product.valid?
            render json: product, status: :created
        else
            render json: { errors: product.errors.full_messages }, status: :unprocessable_entity
        end
    end

    def update
        product = Product.find_by(id: params[:id])
        
        if product
            product.update(product_params)
            render json: product, status: :accepted
        else
            render json: {error: "Product not found"}
        end
    end

    def destroy
        product = Product.find_by(id: params[:id])
        if product
            product.destroy
            head :no_content
            render json: {success: "Product destroy successfully"}
        else
            render json: {error: "Product not found"}
        end
    end
    

    private

    def product_params
        params.permit(:title, :description, :category, :image, :price, :user_id)
    end

    def handle_blank_field(invalid)
        render json: {error: invalid.record.errors}, status: :unprocessable_entity
    end
end

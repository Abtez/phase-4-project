class User < ApplicationRecord
    has_many :products, dependent: :destroy
    # has_many :reviews, through: :products, dependent: :delete_all
    has_secure_password
    validates :username, :password, :bio, :avatar, presence: true
    validates :username, uniqueness: { case_sensitive: true }
end

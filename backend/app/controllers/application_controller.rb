class ApplicationController < ActionController::Base
  protect_from_forgery with: :null_session

  def home
    message = "Hello from rails server!"
    respond_to do |format|
      format.json {render json: {:success => true, :message => message}, status: 200}
    end
  end

  def sports
    message = "This is message from sports action!"
    respond_to do |format|
      format.json {render json: {:success => true, :message => message}, status: 200}
    end
  end
end

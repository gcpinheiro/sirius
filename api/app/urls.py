# from app.views import TodoListAndCreate, TodoDetailChangeAndDelete

# from django.urls import path

# urlpatterns= [
#   path('', TodoListAndCreate.as_view()),
#   path('<int:pk>/', TodoDetailChangeAndDelete.as_view()),
# ]
from app.views import TodoViewSet
from rest_framework.routers import DefaultRouter

router = DefaultRouter()
router.register(r'', TodoViewSet)
urlpatterns = router.urls
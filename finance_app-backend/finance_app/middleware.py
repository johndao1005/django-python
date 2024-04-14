"""
Setup middle ware to add header
https://stackoverflow.com/questions/36099244/how-to-add-an-http-header-to-all-django-responses
"""

class MyMiddleware:

    def __init__(self, get_response):
        self.get_response = get_response

    def __call__(self, request):
        response = self.get_response(request)
        response['Access-Control-Allow-Origin'] = "*"
        return response
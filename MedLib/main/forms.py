from django import forms

class SignupForm(forms.Form):
    email = forms.CharField(max_length=120)
    pwd = forms.CharField(max_length=80)


class LoginForm(forms.Form):
    email=forms.CharField(max_length = 80)
    pwd= forms.CharField(max_length=80)

"""
class AddTopicForm(forms.Form):
    topic_text=forms.CharField(max_length = 250)
    topic_desc=forms.CharField(max_length = 700)
    tag_text=forms.CharField(max_length = 250)

class AddOpinionForm(forms.Form):
    opinion_text=forms.CharField(max_length = 500)
    topic = forms.CharField(max_length = 5)
"""

class SearchForm(forms.Form):
    topic_text=forms.CharField(max_length = 250)
    #symptom=forms.MultipleChoiceField(widget=forms.CheckboxSelectMultiple,required=False)

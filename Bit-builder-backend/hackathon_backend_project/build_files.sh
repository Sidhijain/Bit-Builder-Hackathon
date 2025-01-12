# echo "BUILD START"
# python3.8 -m pip install -r requirements.txt
# python3.8 manage.py runserver
# echo "BUILD END"

echo "BUILD START"
# Install dependencies
pip install --upgrade pip
pip install -r requirements.txt
# Collect static files
python manage.py collectstatic --noinput
# Run database migrations (if required)
python manage.py migrate --noinput
echo "BUILD END"

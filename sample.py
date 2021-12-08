import requests

url="http://openAPI.seoul.go.kr:8088/6b564d5a526d696e31303972666f7341/json/GeoInfoPublicToilet/1/5"
res= requests.get(url)
data=res.json()
realname= data['GeoInfoPublicToilet']['row']
for i in realname:
    print(i['GU_NM'])
    print(i['HNR_NAM'])
    print(i['MASTERNO'])
    print()

# preprocessing.py
import pandas as pd


# Hàm chuẩn hóa cột phân loại
def discrete(col):
    a = pd.DataFrame(col.value_counts()).reset_index()
    a = a.rename(columns={a.columns[0]: 'original_index'})
    b = a['original_index'].to_dict()
    c = dict(zip(b.values(), b.keys()))
    print(c)
    return col.map(c)


# Hàm chuẩn hóa cột tháng
def month_to_int(col):
    mon_dict = {'jan': 1, 'feb': 2, 'mar': 3, 'apr': 4, 'may': 5, 'jun': 6, 'jul': 7, 'aug': 8, 'sep': 9, 'oct': 10,
                'nov': 11, 'dec': 12}
    return col.map(mon_dict)


# Hàm tổng hợp tiền xử lý dữ liệu
def preprocess_data(data):
    df = pd.DataFrame(data)

    # Chuẩn hóa các cột phân loại
    df['job'] = discrete(df['job'])
    df['marital'] = discrete(df['marital'])
    df['education'] = discrete(df['education'])
    df['default'] = discrete(df['default'])
    df['housing'] = discrete(df['housing'])
    df['loan'] = discrete(df['loan'])
    df['contact'] = discrete(df['contact'])

    # Chuẩn hóa cột tháng
    df['month'] = month_to_int(df['month'])

    return df

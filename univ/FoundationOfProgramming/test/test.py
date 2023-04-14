import time
import datetime

log_file_name = './mylog.txt'

log_file = open(log_file_name, 'w')
log_file.write('Start!\n')
log_file.close()

for i in range(10):
    log_file = open(log_file_name, 'a')
    time_info = datetime.datetime.now()
    text = str(i + 1) + '.' + time_info.isoformat()
    print(text)
    log_file.write(text + '\n')
    log_file.close()
    time.sleep(3)

log_file = open(log_file_name, 'a')
print('END')
log_file.write('END' + '\n')
log_file.close()
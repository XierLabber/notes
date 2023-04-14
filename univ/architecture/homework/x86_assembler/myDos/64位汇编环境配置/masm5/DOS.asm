DATAS SEGMENT
    str_out	DB	'Input a string(<100):', 0AH, 0DH, '$'   ;0AH:ASCII码换行,0DH:ASCII码回车, '$'字符串结束标志
    str_in  DB  100, ?, 100 DUP(?)                      ;串中第1个元素规定允许最多输入的字符数(含回车),此处最多可输入100个字符
                                                        ;串中第2个元素保留,保存输入字符的个数
                                                        ;从第3个元素起为输入字符的缓冲区    
    str_buf DB  100 DUP(?)                              ;长度为100字节的字符串缓冲区

DATAS ENDS

STACKS SEGMENT STACK
sta  DB   100 DUP(?)
TOP  EQU  LENGTH sta
STACKS ENDS

CODES SEGMENT
    ASSUME CS:CODES,DS:DATAS,SS:STACKS
START:
    MOV AX,DATAS
    MOV DS,AX
    MOV AX,STACKs
    MOV SS,AX
    MOV SP,TOP 
 
CHECK:    
    MOV DL,0FFH            ;0FFH:键盘输入,0:键盘输出
    MOV AH,06H             
    INT 21H                ;检测扫描键盘,但不等待键盘输入
    JZ  CHECK              ;ZF=1,无键盘输入,继续等待,转CHECK
                           ;ZF=0,有键盘输入,输入的字符存放在AL
       
    MOV DL,AL              ;屏幕输出字符，字符存DL
    MOV AH,02H
    INT 21H
    
    MOV DL,0DH             ;屏幕输出字符，字符存DL
    MOV AH,02H
    INT 21H  
    
    MOV DL,0AH             ;屏幕输出字符，字符存DL
    MOV AH,02H
    INT 21H 
    
    MOV DX, OFFSET str_out ;屏幕输出字符串，字符串首地址送DX
    MOV AH,09H             
    INT 21H
    
    MOV DX, OFFSET str_in  ;输入字符串，字符串首地址送DX
    MOV AH,0AH
    INT 21H
    
    PUSH DS                ;屏幕输出输入的字符串str_in
    POP  ES
    XOR  CX,CX
    MOV  CL,str_in+1
    LEA  SI,str_in+2
    LEA  DI,str_buf
    CLD
    REP MOVSB                      ;传送str_in到str_buf
    MOV BYTE PTR [DI],0AH          ;换行
    MOV BYTE PTR [DI+1],0DH        ;回车 
    MOV BYTE PTR [DI+2],'$'        ;置字符串结束标志
     
     
    MOV DL,0AH              ;屏幕输出字符，字符存DL
    MOV AH,02H
    INT 21H 
      
    MOV DX, OFFSET str_buf  ;屏幕输出字符串，字符串首地址送DX
    MOV AH,09H
    INT 21H
    
    MOV AH,01H              ;输入字符，字符送AL
    INT 21H

    
    MOV AH,4CH              ;返回操作系统功能调用
    INT 21H
CODES ENDS
    END START

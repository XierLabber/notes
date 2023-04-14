DATAS SEGMENT
    str_out	DB	'Input a string(<100):', 0AH, 0DH, '$'   ;0AH:ASCII�뻻��,0DH:ASCII��س�, '$'�ַ���������־
    str_in  DB  100, ?, 100 DUP(?)                      ;���е�1��Ԫ�ع涨�������������ַ���(���س�),�˴���������100���ַ�
                                                        ;���е�2��Ԫ�ر���,���������ַ��ĸ���
                                                        ;�ӵ�3��Ԫ����Ϊ�����ַ��Ļ�����    
    str_buf DB  100 DUP(?)                              ;����Ϊ100�ֽڵ��ַ���������

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
    MOV DL,0FFH            ;0FFH:��������,0:�������
    MOV AH,06H             
    INT 21H                ;���ɨ�����,�����ȴ���������
    JZ  CHECK              ;ZF=1,�޼�������,�����ȴ�,תCHECK
                           ;ZF=0,�м�������,������ַ������AL
       
    MOV DL,AL              ;��Ļ����ַ����ַ���DL
    MOV AH,02H
    INT 21H
    
    MOV DL,0DH             ;��Ļ����ַ����ַ���DL
    MOV AH,02H
    INT 21H  
    
    MOV DL,0AH             ;��Ļ����ַ����ַ���DL
    MOV AH,02H
    INT 21H 
    
    MOV DX, OFFSET str_out ;��Ļ����ַ������ַ����׵�ַ��DX
    MOV AH,09H             
    INT 21H
    
    MOV DX, OFFSET str_in  ;�����ַ������ַ����׵�ַ��DX
    MOV AH,0AH
    INT 21H
    
    PUSH DS                ;��Ļ���������ַ���str_in
    POP  ES
    XOR  CX,CX
    MOV  CL,str_in+1
    LEA  SI,str_in+2
    LEA  DI,str_buf
    CLD
    REP MOVSB                      ;����str_in��str_buf
    MOV BYTE PTR [DI],0AH          ;����
    MOV BYTE PTR [DI+1],0DH        ;�س� 
    MOV BYTE PTR [DI+2],'$'        ;���ַ���������־
     
     
    MOV DL,0AH              ;��Ļ����ַ����ַ���DL
    MOV AH,02H
    INT 21H 
      
    MOV DX, OFFSET str_buf  ;��Ļ����ַ������ַ����׵�ַ��DX
    MOV AH,09H
    INT 21H
    
    MOV AH,01H              ;�����ַ����ַ���AL
    INT 21H

    
    MOV AH,4CH              ;���ز���ϵͳ���ܵ���
    INT 21H
CODES ENDS
    END START

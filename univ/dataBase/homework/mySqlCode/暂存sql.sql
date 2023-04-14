SELECT s.sname FROM
(
    SELECT COUNT(*) AS cnt FROM p
    WHERE p.color='红色'
) AS p_cnt
JOIN
(
    SELECT sno, COUNT(*) AS cnt FROM
    (
        SELECT DISTINCT spj.sno, spj.pno
        FROM spj
        join p ON spj.pno=p.pno AND p.color='红色'
    ) AS sp
    GROUP BY sp.sno
) AS sp_cnt
ON p_cnt.cnt=sp_cnt.cnt
JOIN s ON sp_cnt.sno=s.sno
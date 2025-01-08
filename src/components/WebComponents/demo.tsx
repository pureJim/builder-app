import { useEffect, useState } from 'react';
import { from, map, mergeMap } from 'rxjs';

const DemoCP = () => {
  const [data, setData] = useState<{ userId: number; id: number; title: string; completed: boolean }[]>([]);

  useEffect(() => {
    const subscription = from(fetch('https://jsonplaceholder.typicode.com/todos'))
      .pipe(
        mergeMap(
          (response) => response.json() as Promise<{ userId: number; id: number; title: string; completed: boolean }[]>,
        ),
        map((rst) => {
          // 处理数据
          return rst;
        }),
      )
      .subscribe((rst) => {
        setData(rst);
      });

    return () => {
      subscription.unsubscribe();
    };
  }, []);

  return (
    <div>
      {data.map((item) => {
        return <div key={item.id}>{item.title}</div>;
      })}
    </div>
  );
};

export default DemoCP;

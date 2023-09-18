import { IEducation } from 'src/stores/index.interface';
import { dateParser } from 'src/helpers/utils';

export const Education = ({ education }: { education: IEducation[] }) => {
  return (
    <>
      {education.map((item: IEducation, index: number) => {
        return (
          <div key={index} className="mt-3">
            <div>
              <p className="text-xs">
                <b>{item.studyType} - {item.area}</b>
              </p>
              <div className="flex justify-between items-center">
                <p className="text-xs"><b>{item.institution}</b></p>
                <div className="flex gap-3">
                  <p className="text-xs">
                    {dateParser(item.startDate)} -
                    {item.isStudyingHere ? 'sekarang' : dateParser(item.endDate)}
                  </p>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

import { IPublicationsData } from '@/interfaces/publications/publications';
import React, { useState } from 'react';

const CardContent = ({ postTime, publication }: { postTime: string, publication: IPublicationsData }) => {
    const [likeCounts, setLikeCounts] = useState<Record<string, number>>({});
  
    return (
      <div>
        <div key={postTime} className="card bg-white">
          <div className="card-body py-2 px-4">
            <p className="mb-3">{publication.content}</p>
  
            {publication.image && (
              <figure className="rounded-md overflow-hidden mt-2">
                <img
                  src={publication.image || '/placeholder.svg'}
                  alt="Contenido de la publicación"
                  className="w-full h-auto object-cover"
                />
              </figure>
            )}
          </div>
  
          <div className="divider my-0 mx-4"></div>
        </div>
      </div>
    );
  };
  
export default CardContent;

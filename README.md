FIGMA di https://www.figma.com/design/mAb6JkDj9IaabtFucfmVJh/Mitra-Portal?node-id=0-1&t=y6KxP1mpPdHqr3gV-0

```
openapi: 3.0.0
info:
  title: Mitra Portal API
  version: 1.0.0
paths:
  /categories:
    get:
      summary: Get all categories
      responses:
        '200':
          description: A list of categories
          content:
            application/json:
              schema:
                type: object
                properties:
                  code:
                    type: number
                  status:
                    type: string
                  data:
                    type: array
                    items:
                      $ref: '#/components/schemas/Category'
  /top4-latest-articles:
    get:
      summary: Get top 4 latest articles
      responses:
        '200':
          description: A list of the top 4 latest articles
          content:
            application/json:
              schema:
                type: object
                properties:
                  code:
                    type: number
                  status:
                    type: string
                  data:
                    type: array
                    items:
                      $ref: '#/components/schemas/Article'

  /top5-trending-articles:
    get:
      summary: Get top 5 trending articles
      responses:
        '200':
          description: A list of the top 5 trending articles
          content:
            application/json:
              schema:
                type: object
                properties:
                  code:
                    type: number
                  status:
                    type: string
                  data:
                    type: array
                    items:
                      $ref: '#/components/schemas/Article'

  /latest-articles:
    get:
      summary: Get latest articles with pagination
      parameters:
        - in: query
          name: page
          schema:
            type: integer
          description: Page number
        - in: query
          name: pageSize
          schema:
            type: integer
          description: Number of articles per page
      responses:
        '200':
          description: A paginated list of latest articles
          content:
            application/json:
              schema:
                type: object
                properties:
                  code:
                    type: number
                  status:
                    type: string
                  data:
                    type: array
                    items:
                      $ref: '#/components/schemas/ArticleResponsePaging'

  /recommended-tags:
    get:
      summary: Get recommended tags
      responses:
        '200':
          description: A list of recommended tags
          content:
            application/json:
              schema:
                type: object
                properties:
                  code:
                    type: number
                  status:
                    type: string
                  data:
                    type: array
                    items:
                      $ref: '#/components/schemas/Tag'

  /articles/{article_id}:
    get:
      summary: Get article by ID
      parameters:
        - in: path
          name: article_id
          required: true
          schema:
            type: integer
          description: The ID of the article
      responses:
        '200':
          description: An article
          content:
            application/json:
              schema:
                type: object
                properties:
                  code:
                    type: number
                  status:
                    type: string
                  data:
                    $ref: '#/components/schemas/Article'

  /articles/{article_id}/tags:
    get:
      summary: Get related tags for an article
      parameters:
        - in: path
          name: article_id
          required: true
          schema:
            type: integer
          description: The ID of the article
      responses:
        '200':
          description: A list of related tags
          content:
            application/json:
              schema:
                type: object
                properties:
                  code:
                    type: number
                  status:
                    type: string
                  data:
                    type: array
                    items:
                      $ref: '#/components/schemas/Tag'

  /articles/{article_id}/comments:
    get:
      summary: Get comments for an article
      parameters:
        - in: path
          name: article_id
          required: true
          schema:
            type: integer
          description: The ID of the article
      responses:
        '200':
          description: A list of comments for the article
          content:
            application/json:
              schema:
                type: object
                properties:
                  code:
                    type: number
                  status:
                    type: string
                  data:
                    type: array
                    items:
                      $ref: '#/components/schemas/Comment'

    post:
      summary: Post a comment on an article
      parameters:
        - in: path
          name: article_id
          required: true
          schema:
            type: integer
          description: The ID of the article
      requestBody:
        description: Comment object that needs to be added
        required: true
        content:
          application/json:
            schema:
              $ref: '#/components/schemas/Comment'
      responses:
        '201':
          description: Comment created successfully
          content:
            application/json:
              schema:
                type: object
                properties:
                  code:
                    type: number
                  status:
                    type: string
                  data:
                      $ref: '#/components/schemas/Comment'

  /articles/{article_id}/related:
    get:
      summary: Get related articles
      parameters:
        - in: path
          name: article_id
          required: true
          schema:
            type: integer
          description: The ID of the article
      responses:
        '200':
          description: A list of related articles
          content:
            application/json:
              schema:
                type: object
                properties:
                  code:
                    type: number
                  status:
                    type: string
                  data:
                    type: array
                    items:
                      $ref: '#/components/schemas/Article'

  /tags/{tag}/articles:
    get:
      summary: Get published articles by tag
      parameters:
        - in: path
          name: tag
          required: true
          schema:
            type: string
          description: The name of the tag
        - in: query
          name: page
          schema:
            type: integer
          description: Page number
        - in: query
          name: pageSize
          schema:
            type: integer
          description: Number of articles per page
      responses:
        '200':
          description: A list of published articles by tag
          content:
            application/json:
              schema:
                type: object
                properties:
                  code:
                    type: number
                  status:
                    type: string
                  data:
                    type: array
                    items:
                      $ref: '#/components/schemas/ArticleResponsePaging'

  /provinces/published-articles:
    get:
      summary: Get provinces with published articles
      responses:
        '200':
          description: A list of provinces with published articles
          content:
            application/json:
              schema:
                type: object
                properties:
                  code:
                    type: number
                  status:
                    type: string
                  data:
                    type: array
                    items:
                      $ref: '#/components/schemas/Province'

  /provinces/{provinceId}/kotas:
    get:
      summary: Get cities in a province with published articles
      parameters:
        - in: path
          name: provinceId
          required: true
          schema:
            type: integer
          description: The ID of the province
      responses:
        '200':
          description: A list of cities in the province with published articles
          content:
            application/json:
              schema:
                type: object
                properties:
                  code:
                    type: number
                  status:
                    type: string
                  data:
                    type: array
                    items:
                      $ref: '#/components/schemas/Kota'

  /kotas/{kotaId}/kecamatans:
    get:
      summary: Get districts in a city with published articles
      parameters:
        - in: path
          name: kotaId
          required: true
          schema:
            type: integer
          description: The ID of the city
      responses:
        '200':
          description: A list of districts in the city with published articles
          content:
            application/json:
              schema:
                type: object
                properties:
                  code:
                    type: number
                  status:
                    type: string
                  data:
                    type: array
                    items:
                      $ref: '#/components/schemas/Kecamatan'

  /kecamatans/{kecamatanId}/kelurahans:
    get:
      summary: Get sub-districts in a district with published articles
      parameters:
        - in: path
          name: kecamatanId
          required: true
          schema:
            type: integer
          description: The ID of the district
      responses:
        '200':
          description: A list of sub-districts in the district with published articles
          content:
            application/json:
              schema:
                type: object
                properties:
                  code:
                    type: number
                  status:
                    type: string
                  data:
                    type: array
                    items:
                      $ref: '#/components/schemas/Kelurahan'

  /region-trending-articles:
    get:
      summary: Get region trending articles
      parameters:
        - in: query
          name: page
          schema:
            type: integer
          description: Page number
        - in: query
          name: pageSize
          schema:
            type: integer
          description: Number of articles per page
      responses:
        '200':
          description: A list of region trending articles
          content:
            application/json:
              schema:
                type: object
                properties:
                  code:
                    type: number
                  status:
                    type: string
                  data:
                    type: array
                    items:
                      $ref: '#/components/schemas/ArticleResponsePaging'

  /categories/{category_id}/latest-articles:
    get:
      summary: Get latest articles by category
      parameters:
        - in: path
          name: category_id
          required: true
          schema:
            type: integer
          description: The ID of the category
        - in: query
          name: page
          schema:
            type: integer
          description: Page number
        - in: query
          name: pageSize
          schema:
            type: integer
          description: Number of articles per page
      responses:
        '200':
          description: A list of latest articles by category
          content:
            application/json:
              schema:
                type: object
                properties:
                  code:
                    type: number
                  status:
                    type: string
                  data:
                    type: array
                    items:
                      $ref: '#/components/schemas/ArticleResponsePaging'

  /provinces/{prov_id}/latest-articles:
    get:
      summary: Get latest articles by province
      parameters:
        - in: path
          name: prov_id
          required: true
          schema:
            type: integer
          description: The ID of the province
        - in: query
          name: page
          schema:
            type: integer
          description: Page number
        - in: query
          name: pageSize
          schema:
            type: integer
          description: Number of articles per page
      responses:
        '200':
          description: A list of latest articles by province
          content:
            application/json:
              schema:
                type: object
                properties:
                  code:
                    type: number
                  status:
                    type: string
                  data:
                    type: array
                    items:
                      $ref: '#/components/schemas/ArticleResponsePaging'

  /kotas/{kota_id}/latest-articles:
    get:
      summary: Get latest articles by city
      parameters:
        - in: path
          name: kota_id
          required: true
          schema:
            type: integer
          description: The ID of the city
        - in: query
          name: page
          schema:
            type: integer
          description: Page number
        - in: query
          name: pageSize
          schema:
            type: integer
          description: Number of articles per page
      responses:
        '200':
          description: A list of latest articles by city
          content:
            application/json:
              schema:
                type: object
                properties:
                  code:
                    type: number
                  status:
                    type: string
                  data:
                    type: array
                    items:
                      $ref: '#/components/schemas/ArticleResponsePaging'

  /kecamatans/{kec_id}/latest-articles:
    get:
      summary: Get latest articles by district
      parameters:
        - in: path
          name: kec_id
          required: true
          schema:
            type: integer
          description: The ID of the district
        - in: query
          name: page
          schema:
            type: integer
          description: Page number
        - in: query
          name: pageSize
          schema:
            type: integer
          description: Number of articles per page
      responses:
        '200':
          description: A list of latest articles by district
          content:
            application/json:
              schema:
                type: object
                properties:
                  code:
                    type: number
                  status:
                    type: string
                  data:
                    type: array
                    items:
                      $ref: '#/components/schemas/ArticleResponsePaging'

  /kelurahans/{kel_id}/latest-articles:
    get:
      summary: Get latest articles by sub-district
      parameters:
        - in: path
          name: kel_id
          required: true
          schema:
            type: integer
          description: The ID of the sub-district
        - in: query
          name: page
          schema:
            type: integer
          description: Page number
        - in: query
          name: pageSize
          schema:
            type: integer
          description: Number of articles per page
      responses:
        '200':
          description: A list of latest articles by sub-district
          content:
            application/json:
              schema:
                type: object
                properties:
                  code:
                    type: number
                  status:
                    type: string
                  data:
                    type: array
                    items:
                      $ref: '#/components/schemas/ArticleResponsePaging'

components:
  schemas:
    Category:
      type: object
      properties:
        id:
          type: integer
        name:
          type: string

    Article:
      type: object
      properties:
        id:
          type: integer
        title:
          type: string
        content:
          type: string
        author:
          type: string
        published_at:
          type: string
          format: date-time

    Tag:
      type: object
      properties:
        id:
          type: integer
        name:
          type: string

    Comment:
      type: object
      properties:
        id:
          type: integer
        article_id:
          type: integer
        author:
          type: string
        content:
          type: string
        posted_at:
          type: string
          format: date-time

    Province:
      type: object
      properties:
        id:
          type: integer
        name:
          type: string

    Kota:
      type: object
      properties:
        id:
          type: integer
        name:
          type: string

    Kecamatan:
      type: object
      properties:
        id:
          type: integer
        name:
          type: string

    Kelurahan:
      type: object
      properties:
        id:
          type: integer
        name:
          type: string

    ArticleResponsePaging:
      type: object
      properties:
        total_pages:
          type: integer
        current_page:
          type: integer
        items:
          type: array
          items:
            $ref: '#/components/schemas/Article'
```
